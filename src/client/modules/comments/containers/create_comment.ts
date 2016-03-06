import { useDeps, composeWithTracker, composeAll } from "mantra-core";
import Component, { IComponentProps, IComponentActions } from "../components/create_comment";

import { IKomposer, IKomposerData } from "mantra-core";
import { IContext } from "client/configs/context";

interface IProps {
  context?: () => IContext;
  clearErrors?: () => void;
  postId: string;
}

export const composer: IKomposer = ({context, clearErrors, postId}: IProps, onData: IKomposerData<IComponentProps>) => {
  const {LocalState} = context();
  const error = LocalState.get("CREATE_COMMENT_ERROR");
  onData(null, { error, postId });

  return clearErrors;
};

export const depsMapper = (context: IContext, actions: { comments: IComponentActions }) => ({
  create: actions.comments.create,
  clearErrors: actions.comments.clearErrors,
  context: () => context
});

export default composeAll<IProps>(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
