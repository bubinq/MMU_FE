import { callGet } from "../http/index.js";
import urls from "../http/url.js";

const stateService = {
  getAllStates: () => callGet(urls.state.listAll),
  getCitiesByState: (id) => callGet(urls.state.getCitiesByState(id)),
};

export default stateService;
