import Sidebar from "./components/Sidebar";
import Register from "./pages/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 flex items-center justify-center bg-gray-100">
          <Register />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
