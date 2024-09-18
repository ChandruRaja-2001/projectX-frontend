import ModalContainer from "@/components/Modal/ModalContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Modals | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Alerts page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Modals = () => {
  return <ModalContainer />;
};

export default Modals;
