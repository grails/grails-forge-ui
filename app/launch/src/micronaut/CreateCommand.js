import ToCli from './creators/ToCli'
import ToCurl from './creators/ToCurl'
import ToUrl from './creators/ToUrl'

export class CreateCommand {
  constructor(
    { type, javaVersion, build, gorm, test, name, package: _package, features },
    baseUrl = ''
  ) {
    this.type = type
    this.javaVersion = javaVersion
    this.name = name
    this.gorm = gorm
    this.build = build
    this.test = test
    this.package = _package
    this.features = features
    this.baseUrl = baseUrl
  }

  applicationName() {
    return `${this.package}.${this.name}`
  }

  toUrl(prefix) {
    return ToUrl.make(this, prefix)
  }

  toCli() {
    return ToCli.make(this)
  }

  toCurl() {
    return ToCurl.make(this)
  }
}
