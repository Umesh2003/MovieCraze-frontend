import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToast, selectToastMsg } from "../Redux/toastSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { toastMsg } = useSelector((s) => ({
    toastMsg: s.toast.msg,
    status: s.toast.type,
  }));

  const TOAST_TIMEOUT = 3000;
  useEffect(() => {
    if (toastMsg && toastMsg.length !== 0) {
      toast({
        description: toastMsg,
        duration: TOAST_TIMEOUT,
        isClosable: true,
        position: "top",
        containerStyle: {
          backgroundColor: "green !important",
          accentColor: "green",
        },
      });
      setTimeout(() => dispatch(removeToast()), TOAST_TIMEOUT);
    }
  }, [toastMsg, dispatch]);

  return <></>;
};

export default Toast;
