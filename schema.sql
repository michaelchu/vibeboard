-- Run this query in the Supabase SQL editor to setup your tables  
-- Follow the convention of double-quoting column names so they support camelCase   
-- Full instructions at https://divjoy.com/docs/supabase

/*** USERS ***/

create table public.users (
  -- UUID from auth.users
  "id" uuid references auth.users not null primary key,
  -- User data
  "email" text,
  "name" text,
  -- Validate data
  constraint "email" check (char_length("email") >= 3 AND char_length("email") <= 500),
  constraint "name" check (char_length("name") >= 1 AND char_length("name") <= 144)
);

-- Create security policies
alter table public.users enable row level security;
create policy "Can view their user data" on public.users for select using ( auth.uid() = "id" );
create policy "Can update their user data" on public.users for update using ( auth.uid() = "id" );

-- Create a trigger that automatically inserts a new user after signup with Supabase Auth
create or replace function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.users ("id", "email", "name")
  values (new."id", new."email", new."raw_user_meta_data"->>'full_name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- Create a trigger that automatically updates a user when their email is changed in Supabase Auth
create or replace function public.handle_update_user() 
returns trigger as $$
begin
  update public.users
  set "email" = new."email"
  where "id" = new."id";
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_updated
  after update of "email" on auth.users
  for each row execute procedure public.handle_update_user();


/*** ENUMS ***/
CREATE TYPE size_enum AS ENUM ('60 keys', '65 keys', '80 keys', '87 keys', '104 keys', '108 keys', '120 keys');
CREATE TYPE layout_enum AS ENUM ('QWERTY', 'DVORAK', 'COLEMAK', 'WORKMAN', 'AZERTY');


/*** KEYBOARDS ***/
CREATE TABLE key_mappings (
  id SERIAL PRIMARY KEY,
  key_id INT NOT NULL,
  key_name VARCHAR(50) NOT NULL,
  UNIQUE (key_id)
);

CREATE TABLE IF NOT EXISTS keyboard_themes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme_name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  keyboard_size size_enum NOT NULL,
  keyboard_layout layout_enum NOT NULL,
  owner UUID NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (owner) REFERENCES users(id)
);


CREATE TABLE
  keyboard_theme_keys (
    theme_id UUID NOT NULL,
    key_id INTEGER NOT NULL,
    key_cap_color TEXT,
    key_label_color TEXT,
    PRIMARY KEY (theme_id, key_id),
    FOREIGN KEY (key_id) REFERENCES key_mappings (id),
    FOREIGN KEY (theme_id) REFERENCES keyboard_themes (id)
  );

CREATE INDEX ON keyboard_theme_keys (theme_id);
CREATE INDEX ON keyboard_theme_keys (key_id);
