import { ResourcesApi } from "../api/ResourcesApi";

class ResourcesController {
  private api: any;

  constructor() {
    this.api = new ResourcesApi();
  }

  async getAvatar(id: string) {
    this.api
      .getAvatar(id)
      .then((x) => {
        console.log(x);
        debugger;
      })
      .catch(() => {});
  }
}

export default new ResourcesController();
