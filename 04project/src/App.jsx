
import "./App.css";
import image from "./assets/image.jpg";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div
          className="w-72 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-md hover:scale-105 transition duration-300"
        >
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="NFT"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-bold text-lg">
                Bored Ape NFT
              </h2>

              <span className="text-green-400 font-bold">
                0.01 ETH
              </span>
            </div>

            <p className="text-gray-400 mt-2">
              #345
            </p>

            <button className="mt-5 w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-72 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-md hover:scale-105 transition duration-300"
        >
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
            alt="Coming Soon"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <h2 className="text-white text-xl font-bold">
              Available Soon
            </h2>

            <p className="text-gray-400 mt-2">
              New collection arriving this week.
            </p>

            <button className="mt-5 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              Notify Me
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-72 rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-md hover:scale-105 transition duration-300"
        >
          <img
            src={image}
            alt="Local NFT"
            className="w-full h-64 object-cover"
          />

          <div className="p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-white text-lg font-bold">
                Local Artwork
              </h2>

              <span className="text-yellow-400 font-bold">
                New
              </span>
            </div>

            <p className="text-gray-400 mt-2">
              Imported from your assets folder.
            </p>

            <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
