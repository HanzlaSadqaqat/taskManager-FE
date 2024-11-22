import { notification } from "antd";

type ToastProps = {
  title: string;
  message: string;
  type: "success" | "error";
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
};

const toast = ({
  title,
  message,
  type,
  placement = "topRight",
}: ToastProps) => {
  notification[type]({
    message: title,
    description: message,
    placement,
  });
};

export default toast;
