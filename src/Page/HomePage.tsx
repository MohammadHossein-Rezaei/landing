import HeaderLayout from "../Layout/Header/HeaderLayout";
import MainLayout from "../Layout/Main/MainLayout";
import "./homePage.css";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div id="homePage">
      <HeaderLayout />

      <MainLayout />
    </div>
  );
}
