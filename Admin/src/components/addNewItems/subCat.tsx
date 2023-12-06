interface SubCatProps {
  label: string;
  category_id: string;
  sub_category: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SubCategory = ({
  label,
  category_id,
  sub_category,
  handleSelectChange,
}: SubCatProps) => {
  if (category_id === "") {
    return (
      <section>
        <label>{label}</label>
        <div>
          <select name="" value="" onChange={handleSelectChange}>
            <option value="">Please select a category</option>
          </select>
        </div>
      </section>
    );
  }
  if (category_id === "Electronics") {
    return (
      <section>
        <label>{label}</label>
        <div>
          <select
            name="sub_category"
            value={sub_category}
            onChange={handleSelectChange}
          >
            <option value=""></option>
            <option value="laptops">Laptops</option>
            <option value="phones">Phones</option>
            <option value="accessories">Accessories</option>
            <option value="smartTv">SmartTv</option>
          </select>
        </div>
      </section>
    );
  }
  return (
    <section>
      <label>{label}</label>
      <div>
        <select
          name="sub_category"
          value={sub_category}
          onChange={handleSelectChange}
        >
          <option value=""></option>
          <option value="shoes">Shoes</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
    </section>
  );
};

export default SubCategory;
