
import FriendCard from "./home/FriendCard";

const Home = async () => {
  const res = await fetch("http://localhost:3000/friend.json", {
    cache: "no-store"
  });
  const friends = await res.json();
  return (
    <div>
      <div className="my-5 flex flex-col justify-center items-center text-center">
        <div className="mb-1">
          <h1 className='text-[#1F2937] font-extrabold text-5xl mb-3'>Friends to keep close in your life</h1>
          <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
        </div>
        <button className="btn rounded-2xl text-white bg-[#244D3F]">+ Add a Friend</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full px-10">
          <div className="rounded-2xl bg-white text-center p-5 text-[#64748B]">
            <h2 className="text-2xl font-extrabold">7</h2>
            <p>Total Friends</p>
          </div>

          <div className="rounded-2xl bg-white text-center p-5 text-[#64748B]">
            <h2 className="text-2xl font-extrabold">3</h2>
            <p>On Track</p>
          </div>

          <div className="rounded-2xl bg-white text-center p-5 text-[#64748B]">
            <h2 className="text-2xl font-extrabold">6</h2>
            <p>Need Attention</p>
          </div>
          <div className="rounded-2xl bg-white text-center p-5 text-[#64748B]">
            <h2 className="text-2xl font-extrabold">5</h2>
            <p>Interactions This Month</p>
          </div>
        </div>
        <div className="divider px-8"></div>
      </div>
      <div className="p-8">
        <h2 className="font-bold text-[#1F2937] text-4xl mb-5">Your Friends</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {
            friends.map((friend, index) =>
              <FriendCard key={index} friend={friend}></FriendCard>)
          }
        </div>
      </div>

    </div>

  );
};

export default Home;