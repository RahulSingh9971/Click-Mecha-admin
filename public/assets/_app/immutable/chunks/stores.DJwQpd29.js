import { s } from "./entry.GQqk5Q4g.js";
const e = {
  subscribe: (e) =>
    (() => {
      const e = s;
      return {
        page: { subscribe: e.page.subscribe },
        navigating: { subscribe: e.navigating.subscribe },
        updated: e.updated,
      };
    })().page.subscribe(e),
};
export { e as p };
