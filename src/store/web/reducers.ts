import { PaletteMode } from "@mui/material";
import { TYPES, WebUpdateProps } from "./actions";

export type WebState = {
  mode: PaletteMode;
};

const initialState: WebState = {
  mode: "light",
};

export type PropAction = {
  type: string;
  props: WebUpdateProps;
};

export default (state: WebState = initialState, actions: PropAction) => {
  switch (actions.type) {
    case TYPES.UPDATE_WEB_MODE:
      const updateProps: WebUpdateProps = actions.props;
      return {
        ...state,
        [updateProps.key]: updateProps.value,
      };
    default:
      return state;
  }
};
