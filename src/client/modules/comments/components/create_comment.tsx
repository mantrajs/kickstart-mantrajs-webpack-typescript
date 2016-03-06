import {Component} from "react";

export interface IComponentProps {
  error: string;
  postId: string;
}

export interface IComponentActions {
  create: Function;
  clearErrors: Function;
}

export interface IComponent extends IComponentProps, IComponentActions {}

class CreateComment extends Component<IComponent, {}> {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this.renderError(error) : null}
        <textarea ref="text" placeholder="Enter your comment here.">

        </textarea>
        <br />
        <button onClick={this.create.bind(this)}>Add Comment</button>
      </div>
    );
  }

  private create() {
    const text = this.refs["text"]["value"];
    const {create, postId} = this.props;
    create(postId, text);
    this.refs["text"]["value"] = "";
  }

  private renderError(error: any) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }
}

export default CreateComment;
