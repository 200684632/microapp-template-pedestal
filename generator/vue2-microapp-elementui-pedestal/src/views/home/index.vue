<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <form-create :rule="rule" v-model="fApi" :option="options" />
      <form-create :rule="rule1" v-model="fApi" :option="options" />
    </el-col>
  </el-row>
</template>
<script>
import formCreate from '@form-create/element-ui'
export default {
  data() {
    const that = this
    return {
      json: {},
      fApi: {},
      value: { field1: '111', field2: '222', time: '11:11:11' },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData))
        }
      },
      row: {},
      rule1: [
        {
          type: 'ElRow',
          children: [
            {
              type: 'ElCol',
              props: {
                span: 12
              },
              children: [
                formCreate.maker.input('商品名称', 'goods_name', 'iphone'),
                formCreate.maker.number('商品价格', 'goods_price', 8688)
              ]
            },
            {
              type: 'ElCol',
              props: {
                span: 12
              },
              children: [
                formCreate.maker.radio('是否显示', 'is_show', 1).options([
                  { value: 1, label: '显示' },
                  { value: 0, label: '不显示' }
                ])
              ]
            }
          ]
        },
        {
          type: 'el-input',
          field: 'input1',
          title: '库存',
          value: 0
        },
        {
            type:'input',
            field: 'input2',
            title:'input1',
            link:['input1'],
            value:'',
            update(val, rule){
                rule.title = '' + Date.now()
            }
        },
        {
          type: 'editor',
          field: 'editor',
          title: 'editor',
          value: '<b>@form-create/component-wangeditor</b>',
        }
      ],
      rule: [
        {
          type: 'el-tabs',
          props: {
            value: 'tab1'
          },
          children: [
            {
              type: 'el-tab-pane',
              props: {
                label: 'tab1',
                name: 'tab1'
              },
              children: ['tab1 content']
            },
            {
              type: 'el-tab-pane',
              props: {
                label: 'tab2',
                name: 'tab2'
              },
              children: ['tab2 content']
            },
            {
              type: 'el-tab-pane',
              props: {
                label: 'tab3',
                name: 'tab3'
              },
              children: ['tab3 content']
            },
          ]
        },
        {
          type: 'div',
          props: {
            class: 'test'
          },
          children: [
            {
              type: 'el-table',
              props: {
                data: [{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1517 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1516 弄'
                }]
              },
              on: {
                'selection-change': (row) => {
                  console.log(row)
                },
                'row-click': (row) => {
                  that.row = row
                }
              },
              children: [
                {
                  type: 'el-table-column',
                  props: {
                    type: 'selection'
                  }
                },
                {
                  type: 'el-table-column',
                  props: {
                    prop: 'date',
                    label: '日期',
                    formatter(row) {
                      return row.date
                    }
                  }
                },
                {
                  type: 'el-table-column',
                  props: {
                    prop: 'name',
                    label: '姓名'
                  }
                },
                {
                  type: 'el-table-column',
                  props: {
                    prop: 'address',
                    label: '地址'
                  }
                },
                {
                  type: 'el-table-column',
                  props: {
                    label: '操作'
                  },
                  children: [
                    {
                      type: 'template',
                      props: {
                        'slot-scope': 'scope'
                      },
                      children: [
                        {
                          type: 'el-button',
                          props: {
                            type: 'text'
                          },
                          on: {
                            click() {
                              setTimeout(() => {
                                console.log(that.row)
                              }, 10)
                            }
                          },
                          children: ['编辑']
                        },
                        {
                          type: 'el-button',
                          children: ['删除'],
                          props: {
                            type: 'text'
                          },
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'div',
                  slot: 'append',
                  children: ['21']
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
  },
  methods: {
  },
  watch: {
    json() {
      this.rule = JSON.parse(JSON.stringify(this.json))
    }
  }
}
</script>
