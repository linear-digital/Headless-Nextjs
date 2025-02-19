query User($username: String!) {
    user(username: $username) {
      id
      username
      name
      bio {
        markdown
        html
        text
      }
      bioV2 {
        markdown
        html
        text
      }
      profilePicture
      socialMediaLinks {
        website
        github
        twitter
        instagram
        facebook
        stackoverflow
        linkedin
        youtube
        bluesky
      }
      badges {
        id
        name
        description
        image
        dateAssigned
        infoURL
        suppressed
      }
      publications {
        edges {
          ...UserPublicationsEdgeFragment
        }
        pageInfo {
          ...PageInfoFragment
        }
        totalDocuments
      }
      posts {
        edges {
          ...UserPostEdgeFragment
        }
        nodes {
          ...PostFragment
        }
        pageInfo {
          ...OffsetPageInfoFragment
        }
        totalDocuments
      }
      followersCount
      followingsCount
      tagline
      dateJoined
      location
      availableFor
      tagsFollowing {
        id
        name
        slug
        logo
        tagline
        info {
          ...ContentFragment
        }
        followersCount
        postsCount
        posts {
          ...FeedPostConnectionFragment
        }
      }
      ambassador
      deactivated
      following
      followsBack
      followers {
        nodes {
          ...UserFragment
        }
        pageInfo {
          ...OffsetPageInfoFragment
        }
        totalDocuments
      }
      follows {
        nodes {
          ...UserFragment
        }
        pageInfo {
          ...OffsetPageInfoFragment
        }
        totalDocuments
      }
      techStack {
        nodes {
          ...TagFragment
        }
        pageInfo {
          ...OffsetPageInfoFragment
        }
        totalDocuments
      }
    }
  }