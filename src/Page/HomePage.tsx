import HeaderLayout from "../Layout/Header/HeaderLayout";
import MainLayout from "../Layout/Main/MainLayout";
import "./homePage.css";

export default function HomePage() {
  return (
    <div id="homePage">
      <HeaderLayout />

      <MainLayout />
    </div>
  );
}
