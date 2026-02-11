import { useMemo, useState } from "react";
import "./Store.css";

import coinIcon from "../assets/coin.png";
import { PACKS, ITEM_IMAGES } from "../data/packs";
import PackResultDialog from "../components/AlertDialog";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

function Store({ coins, setCoins, packsOwned, onBuyPack, inventory }) {
  const items = useMemo(() => PACKS, []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pulledItem, setPulledItem] = useState(null);
  const [isDupe, setIsDupe] = useState(false);

  function getRandomItems(packItems, dropCount) {
    const result = [];
    for (let i = 0; i < dropCount; i++) {
      const randomIndex = Math.floor(Math.random() * packItems.length);
      result.push(packItems[randomIndex]);
    }
    return result;
  }

  function handleBuy(pack) {
    if (coins < pack.price) return;

    setCoins((c) => c - pack.price);
    const randomItems = getRandomItems(pack.items, pack.dropCount || 1);
    
    // pulled item details
    const pulledItemId = randomItems[0];
    const itemData = ITEM_IMAGES[pulledItemId];
    
    // pack categories to check inventory
    const packCategoryMap = {
      jamPack: "jam",
      meatPack: "meat",
      moldPack: "mold",
      mysteryPack: "mystery",
      spreadPack: "spreads",
      veggiesPack: "veggies",
    };
    const category = packCategoryMap[pack.id];
    const wasAlreadyOwned = inventory[category]?.includes(pulledItemId) || false;
    
    setPulledItem(itemData);
    setIsDupe(wasAlreadyOwned);
    setDialogOpen(true);
    
    onBuyPack(pack.id, randomItems);
  }

  return (
    <div className="storeContentOnly">
      <PackResultDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        itemName={pulledItem?.name}
        itemImage={pulledItem?.img}
        isDupe={isDupe}
      />
      
      <div className="storeHeader">
        <h1 className="storeTitle">Store</h1>

        <div className="coinBox">
          <img className="coinIcon" src={coinIcon} alt="Coin icon" />
          <div className="coinText">{formatNumber(coins)}</div>
        </div>
      </div>

      <section className="storePanel">
        <div className="itemsScroll">
          <div className="itemsGrid">
            {items.map((pack) => {
              const canAfford = coins >= pack.price;

              return (
                <button
                  key={pack.id}
                  type="button"
                  className={[
                    "itemCard",
                    !canAfford ? "locked" : "",
                  ].join(" ")}
                  onClick={() => handleBuy(pack)}
                  title={
                    canAfford
                      ? `Buy for ${pack.price}`
                      : "Not enough coins"
                  }
                >
                  <div className="itemImageWrap">
                    <img className="itemImage" src={pack.img} alt={pack.name} />
                  </div>

                  <div className="priceRow">
                    <img className="priceCoin" src={coinIcon} alt="Coin icon" />
                    <span className="priceText">{formatNumber(pack.price)}</span>
                  </div>

                  {!canAfford && (
                    <div className="badge danger">Too Expensive</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
