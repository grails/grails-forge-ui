import ToUrl from './creators/ToUrl'

export class FeatureCommand {
  constructor(
    { javaVersion, servlet, gorm, test },
    featuresUrl = ''
  ) {
    this.javaVersion = javaVersion
    this.servlet = servlet
    this.gorm = gorm
    this.test = test
    this.baseUrl = featuresUrl
  }

  toUrl() {
    return ToUrl.makeFeaturesUrl(this, this.baseUrl)
  }

}
