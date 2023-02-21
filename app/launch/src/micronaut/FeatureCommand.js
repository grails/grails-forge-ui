import ToUrl from './creators/ToUrl'

export class FeatureCommand {
  constructor(
    { javaVersion, build, gorm, test },
    featuresUrl = ''
  ) {
    this.javaVersion = javaVersion
    this.build = build
    this.gorm = gorm
    this.test = test
    this.baseUrl = featuresUrl
  }

  toUrl() {
    return ToUrl.makeFeaturesUrl(this, this.baseUrl)
  }

}
