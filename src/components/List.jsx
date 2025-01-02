import Item from "./Item";

function List({ dataList }) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center  w-full px-[50px]">
        <div className="text-3xl font-bold underline mb-3">List Todo</div>
        {dataList.length > 0 &&
          dataList.map((item) => <Item dataItem={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default List;
