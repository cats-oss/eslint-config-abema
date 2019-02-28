workflow "Detect unmergeable PRs" {
  on = "push"
  resolves = ["detect_unmergeable_pull_request_and_mark_them"]
}

action "detect_unmergeable_pull_request_and_mark_them" {
  uses = "cats-oss/github-action-detect-unmergeable@master"
  secrets = ["GITHUB_TOKEN"]
}




workflow "assign_review_by_comment by issue_comment" {
  on = "issue_comment"
  resolves = ["assign_review_by_comment"]
}

workflow "assign_review_by_comment by PR review comment" {
  on = "pull_request_review"
  resolves = ["assign_review_by_comment"]
}

action "assign_review_by_comment" {
  uses = "cats-oss/github-action-auto-assign@master"
  secrets = ["GITHUB_TOKEN"]
}
