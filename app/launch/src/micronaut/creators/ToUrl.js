function buildFeaturesQuery(features) {
  return Object.keys(features)
    .reduce((array, feature) => {
      array.push(`features=${feature}`)
      return array
    }, [])
    .join('&')
}

export default class ToUrl {

  static makeFeaturesUrl(featureCommand, baseUrl) {
    const {
      javaVersion,
      servlet,
      gorm,
      test,
    } = featureCommand

    const query = [
      gorm && `gorm=${featureCommand.gorm}`,
      servlet && `servlet=${featureCommand.servlet}`,
      test && `test=${featureCommand.test}`,
      javaVersion && `javaVersion=${featureCommand.javaVersion}`,
    ].filter((i) => i)

    return encodeURI(`${baseUrl}?${query.join('&')}`)
  }

  static make(createCommand, prefix) {
    if (!prefix) {
      console.error(
        "A prefix is required, should be one of 'diff', 'preview', 'github', 'create'"
      )
    }
    const {
      type,
      gorm,
      servlet,
      test,
      javaVersion,
      features,
      baseUrl,
    } = createCommand

    const applicationName = createCommand.applicationName()
    const base = `/${prefix}/${type.toLowerCase()}/${applicationName}`

    const query = [
      gorm && `gorm=${gorm}`,
      servlet && `servlet=${servlet}`,
      test && `test=${test}`,
      javaVersion && `javaVersion=${javaVersion}`,
    ].filter((i) => i)

    const featuresQuery = buildFeaturesQuery(features)
    if (featuresQuery) {
      query.push(featuresQuery)
    }
    return encodeURI(`${baseUrl}${base}?${query.join('&')}`)
  }
}
