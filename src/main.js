const core = require('@actions/core')
const github = require('@actions/github')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    // The `who-to-greet` input is defined in action metadata file
    const whoToGreet = core.getInput('who-to-greet', { required: true })
    core.info(`Hello, ${whoToGreet}!`)

    // Get the current time and set as an output
    const time = new Date().toTimeString()
    core.setOutput('time', time)

    // Output the payload for debugging
    core.info(
      `The event payload: ${JSON.stringify(github.context.payload, null, 2)}`
    )
    const testVar = []
    const global = {
      dfg: 'gftretred',
      dgf: 'gfd',
      sg: 'gfd',
      gdf: 'gfd',
      dgfg: 'gfd',
      dfsg: 'gfd',
      dvfvvg: 'gfd',
      dvfg: 'gfd',
      dfvsg: 'gfd',
      dfvg: 'gfd',
      dfsfg: 'gfd',
      dffsdg: 'gfd'
    }
    const env = { dfgdfg: 'fgdfdg' }
    testVar.push(global)
    testVar.push(env)
    console.log(testVar[0], '0')
    console.log(testVar[1], '1')
    // const masked = JSON.stringify(testVar[0])
    const masked = testVar[0]
    console.log(masked, 'pre')
    core.setSecret(masked)

    console.log(masked, 'post')

    core.exportVariable('TF_VAR_HELLO', masked)
  } catch (error) {
    // Fail the workflow step if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
