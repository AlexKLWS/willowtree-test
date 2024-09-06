import { Container, interfaces, ContainerModule } from 'inversify';
// import { IPeopleFetchService, PeopleFetchServiceId, PeopleFetchService } from './peopleFetch';

export const containerModule = new ContainerModule((bind: interfaces.Bind) => {
  // bind<IPeopleFetchService>(PeopleFetchServiceId).to(PeopleFetchService).inSingletonScope();
});

export const container = new Container();
