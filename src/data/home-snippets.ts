export const libraryMain = `func main() {
	config := authulaconfig.NewConfig(
		authulaconfig.WithAppName("Acme"),
		authulaconfig.WithBasePath("/api/auth"),
	)
	auth := authula.New(&authula.AuthConfig{
		Config: config,
		Plugins: []authulamodels.Plugin{
			emailpasswordplugin.New(emailpasswordplugintypes.EmailPasswordPluginConfig{Enabled: true}),
			sessionplugin.New(sessionplugin.SessionPluginConfig{Enabled: true}),
		},
	})
	log.Fatal(http.ListenAndServe(":8080", auth.Handler()))
}`;

export const hookExample = `hook := models.Hook{
	Stage: models.HookBefore,
	Order: 0,
	Handler: func(ctx *models.RequestContext) error {
		if ctx.Actor == nil || ctx.Actor.Type != models.ActorUser {
			ctx.SetJSONResponse(http.StatusUnauthorized, map[string]any{
				"message": "Authentication required",
			})
			ctx.Handled = true
		}
		return nil
	},
}`;

export const pluginInterface = `type Plugin interface {
	Metadata() PluginMetadata
	Config() any
	Init(ctx *PluginContext) error
	Close() error
}`;

export const standaloneToml = `app_name = "Authula"
base_url = "http://localhost:8080"
base_path = "/api/auth"

[database]
provider = "postgres"

[plugins]

[plugins.email_password]
enabled = true

[plugins.session]
enabled = true`;

export const standaloneDocker = `docker run -itd \\
  -p 8080:8080 \\
  -v ./config.toml:/home/appuser/config.toml \\
  --env-file ./.env \\
  ghcr.io/authula/authula:latest`;

export const homeSnippets = {
  libraryMain,
  hookExample,
  pluginInterface,
  standaloneToml,
  standaloneDocker,
} as const;

export type SnippetKey = keyof typeof homeSnippets;
