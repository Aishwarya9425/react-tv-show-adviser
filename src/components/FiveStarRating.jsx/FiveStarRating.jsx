import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  console.log("rating", rating);
  //Declare star icon array
  const starList = [];

  //Store number of filled stars
  const starFillCount = Math.floor(rating);

  //Store if yes or no there is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  //store the number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  //push the filled stars icon
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  //push an half star icon if necessary
  if (hasHalfStar) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  //push the empty stars icon
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarHalf key={"star-empty" + i} />);
  }

  //render the star icon array

  return <div>{starList}</div>;
}
