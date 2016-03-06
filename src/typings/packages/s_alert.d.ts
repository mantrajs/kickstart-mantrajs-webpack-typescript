interface SAlertStatic {
  success(message: string, options?: Object): void;
  info(message: string, options?: Object): void;
  error(message: string, options?: Object): void;
  config(config: Object): void;
}

declare var sAlert: SAlertStatic;

declare module "react-s-alert" {
  function Alert(): any;
  export default Alert;
}
