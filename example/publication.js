{
    id
    title
    displayTitle
    descriptionSEO
    about {
      markdown
      html
      text
    }
    url
    canonicalURL
    author {
      id
      username
      name
      bio {
        ...ContentFragment
      }
      bioV2 {
        ...ContentFragment
      }
      profilePicture
      socialMediaLinks {
        ...SocialMediaLinksFragment
      }
      badges {
        ...BadgeFragment
      }
      publications {
        ...UserPublicationsConnectionFragment
      }
      posts {
        ...UserPostConnectionFragment
      }
      followersCount
      followingsCount
      tagline
      dateJoined
      location
      availableFor
      tagsFollowing {
        ...TagFragment
      }
      ambassador
      deactivated
      following
      followsBack
      followers {
        ...UserConnectionFragment
      }
      follows {
        ...UserConnectionFragment
      }
      techStack {
        ...UserTagsConnectionFragment
      }
    }
    favicon
    headerColor
    metaTags
    integrations {
      fbPixelID
      fathomSiteID
      fathomCustomDomainEnabled
      fathomCustomDomain
      hotjarSiteID
      matomoSiteID
      matomoURL
      gaTrackingID
      plausibleAnalyticsEnabled
      wmPaymentPointer
      umamiWebsiteUUID
      umamiShareId
      gTagManagerID
      koalaPublicKey
      msClarityID
    }
    invites {
      pendingInvites {
        ...PendingInviteConnectionFragment
      }
      roleBasedInvites {
        ...RoleBasedInviteConnectionFragment
      }
      areRoleBasedInviteLinksActive
    }
    preferences {
      logo
      darkMode {
        ...DarkModePreferencesFragment
      }
      enabledPages {
        ...PagesPreferencesFragment
      }
      navbarItems {
        ...PublicationNavbarItemFragment
      }
      layout
      disableFooterBranding
      isSubscriptionModalDisabled
    }
    followersCount
    imprint
    imprintV2 {
      markdown
      html
      text
    }
    isTeam
    links {
      twitter
      instagram
      github
      website
      hashnode
      youtube
      dailydev
      linkedin
      mastodon
      facebook
      bluesky
    }
    domainInfo {
      hashnodeSubdomain
      domain {
        ...DomainStatusFragment
      }
      wwwPrefixedDomain {
        ...DomainStatusFragment
      }
    }
    isHeadless
    series {
      id
      name
      createdAt
      description {
        ...ContentFragment
      }
      coverImage
      author {
        ...UserFragment
      }
      cuid
      slug
      sortOrder
      posts {
        ...SeriesPostConnectionFragment
      }
    }
    seriesList {
      edges {
        ...SeriesEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    posts {
      edges {
        ...PostEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    postsViaPage {
      nodes {
        ...PostFragment
      }
      pageInfo {
        ...OffsetPageInfoFragment
      }
      totalDocuments
    }
    pinnedPost {
      id
      slug
      previousSlugs
      title
      subtitle
      author {
        ...UserFragment
      }
      coAuthors {
        ...UserFragment
      }
      tags {
        ...TagFragment
      }
      url
      canonicalUrl
      publication {
        ...PublicationFragment
      }
      cuid
      coverImage {
        ...PostCoverImageFragment
      }
      bannerImage {
        ...PostBannerImageFragment
      }
      brief
      readTimeInMinutes
      views
      series {
        ...SeriesFragment
      }
      reactionCount
      replyCount
      responseCount
      featured
      contributors {
        ...UserFragment
      }
      commenters {
        ...PostCommenterConnectionFragment
      }
      comments {
        ...PostCommentConnectionFragment
      }
      bookmarked
      content {
        ...ContentFragment
      }
      likedBy {
        ...PostLikerConnectionFragment
      }
      featuredAt
      publishedAt
      updatedAt
      preferences {
        ...PostPreferencesFragment
      }
      audioUrls {
        ...AudioUrlsFragment
      }
      seo {
        ...SEOFragment
      }
      ogMetaData {
        ...OpenGraphMetaDataFragment
      }
      hasLatexInPost
      isFollowed
      isAutoPublishedFromRSS
      features {
        ...PostFeaturesFragment
      }
      sourcedFromGithub
    }
    post {
      id
      slug
      previousSlugs
      title
      subtitle
      author {
        ...UserFragment
      }
      coAuthors {
        ...UserFragment
      }
      tags {
        ...TagFragment
      }
      url
      canonicalUrl
      publication {
        ...PublicationFragment
      }
      cuid
      coverImage {
        ...PostCoverImageFragment
      }
      bannerImage {
        ...PostBannerImageFragment
      }
      brief
      readTimeInMinutes
      views
      series {
        ...SeriesFragment
      }
      reactionCount
      replyCount
      responseCount
      featured
      contributors {
        ...UserFragment
      }
      commenters {
        ...PostCommenterConnectionFragment
      }
      comments {
        ...PostCommentConnectionFragment
      }
      bookmarked
      content {
        ...ContentFragment
      }
      likedBy {
        ...PostLikerConnectionFragment
      }
      featuredAt
      publishedAt
      updatedAt
      preferences {
        ...PostPreferencesFragment
      }
      audioUrls {
        ...AudioUrlsFragment
      }
      seo {
        ...SEOFragment
      }
      ogMetaData {
        ...OpenGraphMetaDataFragment
      }
      hasLatexInPost
      isFollowed
      isAutoPublishedFromRSS
      features {
        ...PostFeaturesFragment
      }
      sourcedFromGithub
    }
    redirectedPost {
      id
      slug
      previousSlugs
      title
      subtitle
      author {
        ...UserFragment
      }
      coAuthors {
        ...UserFragment
      }
      tags {
        ...TagFragment
      }
      url
      canonicalUrl
      publication {
        ...PublicationFragment
      }
      cuid
      coverImage {
        ...PostCoverImageFragment
      }
      bannerImage {
        ...PostBannerImageFragment
      }
      brief
      readTimeInMinutes
      views
      series {
        ...SeriesFragment
      }
      reactionCount
      replyCount
      responseCount
      featured
      contributors {
        ...UserFragment
      }
      commenters {
        ...PostCommenterConnectionFragment
      }
      comments {
        ...PostCommentConnectionFragment
      }
      bookmarked
      content {
        ...ContentFragment
      }
      likedBy {
        ...PostLikerConnectionFragment
      }
      featuredAt
      publishedAt
      updatedAt
      preferences {
        ...PostPreferencesFragment
      }
      audioUrls {
        ...AudioUrlsFragment
      }
      seo {
        ...SEOFragment
      }
      ogMetaData {
        ...OpenGraphMetaDataFragment
      }
      hasLatexInPost
      isFollowed
      isAutoPublishedFromRSS
      features {
        ...PostFeaturesFragment
      }
      sourcedFromGithub
    }
    ogMetaData {
      image
    }
    features {
      newsletter {
        ...NewsletterFeatureFragment
      }
      viewCount {
        ...ViewCountFeatureFragment
      }
      readTime {
        ...ReadTimeFeatureFragment
      }
      audioBlog {
        ...AudioBlogFeatureFragment
      }
      textSelectionSharer {
        ...TextSelectionSharerFeatureFragment
      }
      customCSS {
        ...CustomCSSFeatureFragment
      }
      headlessCMS {
        ...HeadlessCMSFeatureFragment
      }
      proTeam {
        ...ProTeamFeatureFragment
      }
      gptBotCrawling {
        ...GPTBotCrawlingFeatureFragment
      }
    }
    drafts {
      edges {
        ...DraftEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    allDrafts {
      edges {
        ...DraftEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    scheduledDrafts {
      edges {
        ...DraftEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    allScheduledDrafts {
      edges {
        ...DraftEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    staticPage {
      id
      title
      slug
      content {
        ...ContentFragment
      }
      hidden
      ogMetaData {
        ...OpenGraphMetaDataFragment
      }
      seo {
        ...SEOFragment
      }
    }
    staticPages {
      edges {
        ...StaticPageEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    submittedDrafts {
      edges {
        ...DraftEdgeFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
      totalDocuments
    }
    isGitHubBackupEnabled
    isGithubAsSourceConnected
    urlPattern
    emailImport {
      currentImport {
        ...EmailCurrentImportFragment
      }
    }
    redirectionRules {
      id
      type
      source
      destination
    }
    hasBadges
    sponsorship {
      content {
        ...ContentFragment
      }
      stripe {
        ...StripeConfigurationFragment
      }
    }
    recommendedPublications {
      node {
        ...PublicationFragment
      }
      totalFollowersGained
    }
    totalRecommendedPublications
    recommendingPublications {
      edges {
        ...UserRecommendingPublicationEdgeFragment
      }
      nodes {
        ...PublicationFragment
      }
      pageInfo {
        ...OffsetPageInfoFragment
      }
      totalDocuments
    }
    allowContributorEdits
    members {
      nodes {
        ...PublicationMemberFragment
      }
      pageInfo {
        ...OffsetPageInfoFragment
      }
      totalDocuments
    }
    publicMembers {
      nodes {
        ...PublicationMemberFragment
      }
      pageInfo {
        ...OffsetPageInfoFragment
      }
      totalDocuments
    }
  }