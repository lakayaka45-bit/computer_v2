const WishItem = ({ id, title, price, image, slug, stockAvailabillity }: {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  stockAvailabillity: number;
}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
    </tr>
  );
};

export default WishItem;
