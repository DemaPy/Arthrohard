import { Modal } from "antd";
import { useState } from "react";

const Product = ({ id, name, value }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-[#BEBEBE] flex place-content-center items-center text-black futura-heavy text-3xl w-[20%] h-[350px] min-w-[280px]"
      >
        ID: {id}
      </div>
      <Modal centered footer={null}  open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <div className="text-start flex flex-col gap-8">
          <p className="transition-colors futura-heavy xl:text-3xl text-2xl">
            ID: {id}
          </p>
          <p className="transition-colors futura-heavy xl:text-3xl text-2xl">
            {name}
          </p>
          <p className="transition-colors futura-heavy xl:text-3xl text-2xl">
            {value}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Product;
