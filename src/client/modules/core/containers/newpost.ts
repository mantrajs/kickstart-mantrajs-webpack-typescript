import NewPost, { IComponentProps, IComponentActions} from "../components/newpost";
import {useDeps, composeWithTracker, composeAll, IKomposer, IKomposerData, IDepsMapper} from "mantra-core";

import { IContext } from "client/configs/context";

interface IProps {
  context?: () => IContext;
  clearErrors?: () => void;
}

export const composer: IKomposer = ({context, clearErrors}, onData: IKomposerData<IComponentProps>) => {
  const {LocalState} = context();
  const error = LocalState.get("SAVING_ERROR");
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper: IDepsMapper = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
