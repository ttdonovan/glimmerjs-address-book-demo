import Application from "@glimmer/application";
import Resolver, { BasicModuleRegistry, ResolverConfiguration } from "@glimmer/resolver";
import moduleMap from "../config/module-map";
import resolverConfiguration from "../config/resolver-configuration";

export default class App extends Application {
  constructor() {
    const moduleRegistry = new BasicModuleRegistry(moduleMap);
    const resolver = new Resolver(resolverConfiguration, moduleRegistry);

    super({
      rootName: resolverConfiguration.app.rootName,
      resolver,
    });
  }
}
