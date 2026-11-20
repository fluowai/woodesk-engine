import { ChatbotXException } from "../errors"

/**
 * Wootech Master Unlock:
 * Returns true for all enterprise features (branding, custom domains, SSO, unlimited workspaces/seats).
 */
export const hasEnterpriseFeatures = async (): Promise<boolean> => true

export const enterpriseFeatureRequiredException = () =>
  new ChatbotXException(
    "This feature requires an enterprise license",
    "enterpriseFeatureRequired",
    403,
  )

/**
 * Server-side guard for enterprise-only mutations and queries.
 * Unlocked for Wootech Woodesk deployment.
 */
export const assertEnterpriseFeatures = async (): Promise<void> => { }

