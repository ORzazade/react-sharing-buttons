import * as React from "react"

interface SpecificSocialSharingButtonProps {
  onClick?: () => any
  onMouseEnter?: () => any
  onMouseLeave?: () => any

  /** This style will be used when an user hovers above the button. */
//   activeStyle?: object

  /** Root element will have this className */
  className?: string

  /** Icon will be used. Can be a react component or a string. If string provided, will render an <i> element, see `iconFormat`. */
//   icon?: string | React.Component | Function

  /** The size of icon e.g. "26px". */
//   iconSize?: string

  /** If true, active styles wont apply. You can use your logic and compute custom styles by passing an object to `style` param. */
//   preventActiveStyles?: Boolean

  /** Override default button styles. */
  style?: object

   /** url which you want to share */
   url?: string

  /** Text will be displayed */
  description?: string
}

declare class SpecificSocialSharingButton extends React.Component<SpecificSocialSharingButtonProps, any> { }

declare class SocialButtons extends SpecificSocialLoginButton { }

export {
    SocialButtons,
}