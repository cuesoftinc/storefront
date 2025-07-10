resource "helm_release" "storefront-release" {
  name  = "storefront"
  chart = "./Chart"
}
