package grifts

import (
	"github.com/debudda/buffalo_elm_starter/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
