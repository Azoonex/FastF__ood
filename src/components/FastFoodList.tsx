import FastFoodItem from "./FastFoodItem";


function FastFoodList({ fastFoodeItems }: any) {
  console.log(fastFoodeItems);
  let dalay = 0.1
  return (
    <div
      style={{ margin: " 70px 42px" }}
      className="row row-gap-3 main">
      {
        fastFoodeItems.map((item): any => {
          dalay += 0.030;
          return (
            <div className="col-md-4 col-sm-6 mb-grid-gutter" key={item.id}>
              <FastFoodItem {...item} dalay={dalay} />
            </div>
          )
})
      }
    </div>
  )
}

export default FastFoodList
