- # react-cloud-progress-bar

  > Simple [React](http://facebook.github.io/react/index.html) component for a progress bar. See [Demo](http://cloudshadow.me/progressbar) 

  ## Install

  ```bash
  npm install react-cloud-progress-bar --save
  ```

  ## Example

  ```javascript
  import ProgressBar from 'react-cloud-progress-bar';

  <ProgressBar 
    pFunctions={
      [ 
        { func:function1, paras:[para1] },
        { func:function2, paras:[para1, para2] },
        { func:function3, paras:[para1, para2, para3] }
      ]
    }
    color={'green'}
    height={'3px'}
    duration={'5'}
  />

  ```

  ​

  ## Documentation - props

  ### Always required

  #### props:pFunctions

  A Array contain several functions and function's parameters, functions will be run when progress bar run out.

  ```jsx
  [ 
    { func:function1, paras:[para1] },
    { func:function2, paras:[para1, para2] },
    { func:function3, paras:[para1, para2, para3] }
  ]
  ```

  ### Optional

  #### color: string

  ##### default:'#0085ff'

  Set the progress bar color.

  #### height: string

  ##### default:'2px'

  Set the progress bar height.

  #### duration: string

  ##### default: '10'

  Set the progress bar duration.

  ## Changelog

  - 1.0.3
