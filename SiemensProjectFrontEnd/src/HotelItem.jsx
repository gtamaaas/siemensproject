function HotelItem({ hotel }) {
  return (
    <>
      <div class="flex gap-10 border">
        <div>{hotel.name}</div>
        <div> Distance from you: {hotel.distance}</div>
        <button class="bg-blue-300">Check out hotel</button>
      </div>
    </>
  );
}

export default HotelItem;
