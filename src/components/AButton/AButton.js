import AButton from "./AButton.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
    install(vue) {
        registerComponent(vue, AButton);
    }
};

export default Plugin;

export { AButton };
