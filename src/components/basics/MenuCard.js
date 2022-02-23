import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer" >
        {menuData.map((curElen) => {
          return (
            <>
              <div className="card-container"key={curElen.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElen.id}</span>
                    <span className="card-author subtle">{curElen.name}</span>
                              <h2 className="card-title">{ curElen.name}</h2>
                    <span className="card-description subtle">
                      {curElen.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElen.image} alt="images" className="card-media" />
                  <span className="card-tag subtle">order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
