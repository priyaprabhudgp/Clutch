import { useMemo } from "react";
import "./Store.css";

import coinIcon from "../assets/coin.png";
import { PACKS } from "../data/packs";

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

function Store({ coins, setCoins, packsOwned, onBuyPack }) {
  const items = useMemo(() => PACKS, []);

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
    onBuyPack(pack.id, randomItems);
  }

  return (
    <div className="storeContentOnly">
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
