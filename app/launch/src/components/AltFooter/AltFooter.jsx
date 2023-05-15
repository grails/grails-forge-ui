import Github from '../../images/github.svg'
import Linkedin from '../../images/linkedin.svg'
import OciHomeToGrails from '../../images/oci_home_to_grails.svg'
import Slack from '../../images/slack.svg'
import Twitter from '../../images/twitter.svg'
import Youtube from '../../images/youtube.svg'

const AltFooter = () => (
  <footer>
    <div class="content">
      <div class="ocihometograils">
        <span>Sponsored by</span>
        <a href="https://objectcomputing.com/products/grails/">
          <img
            src={OciHomeToGrails}
            alt="Object Computing - Home to Grails"
            width="300px"
          />
        </a>
      </div>
      <a href="https://slack.grails.org">
        <img src={Slack} class="" alt="Slack Icon" />
      </a>
      <a href="https://www.youtube.com/watch?v=XnRNfDGkBVg&amp;list=PLI74De5M9T73uH3WilDCePP2qfSDpMaGu">
        <img src={Youtube} class="" alt="Youtube Icon" />
      </a>
      <a href="https://www.linkedin.com/groups/39757">
        <img src={Linkedin} class="" alt="LinkedIn Icon" />
      </a>
      <a href="https://github.com/grails/">
        <img src={Github} class="" alt="Github Icon" />
      </a>
      <a href="https://twitter.com/grailsframework">
        <img src={Twitter} class="" alt="Twitter Icon" />
      </a>
      <section class="partnersnav">
        <div class="links">
          Grails' repositories are hosted by{' '}
          <a href="https://grails.jfrog.io/">Artifactory</a>
        </div>
        <div class="links">
          Website hosting provided by <a href="https://aws.amazon.com/">AWS</a>
        </div>
        <div class="links">
          YourKit supports Grails with its{' '}
          <a href="https://www.yourkit.com/java/profiler/"> Java Profiler</a>
        </div>
        <div class="links">
          Grails is Open Source{' '}
          <a href="https://www.apache.org/licenses/LICENSE-2.0.html">
            Apache 2 License
          </a>
        </div>
        <div class="links">
          <a href="https://grails.org/buildstatus.html">Build Status</a>
        </div>
      </section>
    </div>
  </footer>
)

export default AltFooter
