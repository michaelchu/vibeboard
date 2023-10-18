import React, { useState } from "react";
import {
  StarIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import FormAlert from "./FormAlert";
import Button from "./Button";
import EditItemModal from "./EditItemModal";
import { useAuth } from "./../util/auth";
import { updateItem, deleteItem, useItemsByOwner } from "./../util/db";

function DashboardItems(props) {
  const auth = useAuth();

  const {
    data: items,
    status: itemsStatus,
    error: itemsError,
  } = useItemsByOwner(auth.user.uid);

  const [creatingItem, setCreatingItem] = useState(false);

  const [updatingItemId, setUpdatingItemId] = useState(null);

  const itemsAreEmpty = !items || items.length === 0;

  const canUseStar =
    auth.user.planIsActive &&
    (auth.user.planId === "pro" || auth.user.planId === "business");

  const handleStarItem = (item) => {
    if (canUseStar) {
      updateItem(item.id, { featured: !item.featured });
    } else {
      alert("You must upgrade to the pro or business plan to use this feature");
    }
  };

  return (
    <>
      {itemsError && (
        <div className="mb-4">
          <FormAlert type="error" message={itemsError.message} />
        </div>
      )}

      <div>
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl">Items</span>
          <Button
            size="sm"
            variant="primary"
            onClick={() => setCreatingItem(true)}
          >
            Add Item
          </Button>
        </div>

        {(itemsStatus === "loading" || itemsAreEmpty) && (
          <div className="p-8">
            {itemsStatus === "loading" && <>Loading...</>}

            {itemsStatus !== "loading" && itemsAreEmpty && (
              <>Nothing yet. Click the button to add your first item.</>
            )}
          </div>
        )}

        {itemsStatus !== "loading" && items && items.length > 0 && (
          <>
            {items.map((item, index) => (
              <div
                className={
                  "flex p-4 border-b border-gray-200" +
                  (item.featured ? " bg-yellow-200" : "")
                }
                key={index}
              >
                {item.name}
                <div className="flex items-center ml-auto space-x-3">
                  <button
                    className={
                      "w-5 h-5" +
                      (item.featured ? " text-yellow-500" : "") +
                      (!item.featured ? " text-slate-600" : "")
                    }
                    onClick={() => handleStarItem(item)}
                  >
                    <StarIcon />
                  </button>
                  <button
                    className="w-5 h-5 text-slate-600"
                    onClick={() => setUpdatingItemId(item.id)}
                  >
                    <PencilSquareIcon />
                  </button>
                  <button
                    className="w-5 h-5 text-slate-600"
                    onClick={() => deleteItem(item.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {creatingItem && <EditItemModal onDone={() => setCreatingItem(false)} />}

      {updatingItemId && (
        <EditItemModal
          id={updatingItemId}
          onDone={() => setUpdatingItemId(null)}
        />
      )}
    </>
  );
}

export default DashboardItems;
