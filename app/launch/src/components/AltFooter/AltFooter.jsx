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
            <a href="https://grails.org/foundation/index.html"><img class="" src="https://grails.org/images/foundation-logo-horizontal-orange.svg" alt="Grails Foundation" width="300px" /></a>
            <span style="margin-top:22px;">© 2023 Grails Foundation. All rights reserved.</span>
        </div>

        <a href="mailto:info@grails.org"><img class="" src="https://grails.org/images/email.svg" alt="Email Icon" /></a>
        <a href="https://slack.grails.org"><img class="" src="https://grails.org/images/slack.svg" alt="Slack Icon" /></a>
        <a href="https://www.youtube.com/watch?v=XnRNfDGkBVg&amp;list=PLI74De5M9T73uH3WilDCePP2qfSDpMaGu"><img class="" src="https://grails.org/images/youtube.svg" alt="Youtube Icon" /></a>
        <a href="https://www.linkedin.com/showcase/official-grails/"><img class="" src="https://grails.org/images/linkedin.svg" alt="LinkedIn Icon" /></a>
        <a href="https://github.com/grails/"><img class="" src="https://grails.org/images/github.svg" alt="Github Icon" /></a>
        <a href="https://twitter.com/grailsframework"><img class="" src="https://grails.org/images/twitter.svg" alt="Twitter Icon" /></a>

        <section class="partnersnav">

            <div class="links">The Grails framework is Open Source
                <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2 License</a>
            </div>

            <div class="links">
                <a href="https://grails.org/privacy-policy.html">Privacy Policy</a>
            </div>
            <div class="links">
                <a href="https://grails.org/trademark-policy.html">Trademark Policy &amp; Brand Guidelines</a>
            </div>
        </section>
    </div>
  </footer>
)

export default AltFooter
