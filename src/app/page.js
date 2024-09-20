import Dropdown from "./components/Dropdown/Dropdown";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Dropdown
        buttonText="Dropdown button"
        content={<p>Hello world</p>}
      />
    </div>
  )
}
