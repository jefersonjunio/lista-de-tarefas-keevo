using System.Text.Json.Serialization;

namespace lista_de_tarefas_api.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum StatusEnum
    {
        Concluido,
        Inicializado,
    }
}
