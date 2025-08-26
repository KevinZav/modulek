type MappingDefinition = Record<string, string>;

export class Mapper<Source, Target> {
  constructor(private readonly map: MappingDefinition) {}

  public toTarget(source: Source): Target {
    const result: any = {};
    for (const [sourceKey, targetKey] of Object.entries(this.map)) {
      result[targetKey] = (source as any)[sourceKey];
    }

    return result as Target;
  }

  public toSource(target: Target): Source {
    const result: any = {};
    for(const [sourceKey, targetKey] of Object.entries(this.map)) {
      result[sourceKey] = (target as any)[targetKey];
    }

    return result as Source;
  }
}