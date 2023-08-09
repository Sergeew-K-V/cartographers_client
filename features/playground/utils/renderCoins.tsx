const renderCoins = (coins: number) => {
  const coinsArray = [];
  for (let i = 0; i < coins; i++) {
    coinsArray.push(
      <div key={i} className="coins-divider">
        \
      </div>
    );
  }
  return coinsArray;
};

export default renderCoins;
