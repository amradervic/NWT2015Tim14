<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */

$this->breadcrumbs=array(
	'Objekat Has Kategorijas'=>array('index'),
	'Manage',
);

$this->menu=array(
	array('label'=>'List ObjekatHasKategorija', 'url'=>array('index')),
	array('label'=>'Create ObjekatHasKategorija', 'url'=>array('create')),
);

Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#objekat-has-kategorija-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
");
?>

<h1>Manage Objekat Has Kategorijas</h1>

<p>
You may optionally enter a comparison operator (<b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>&lt;&gt;</b>
or <b>=</b>) at the beginning of each of your search values to specify how the comparison should be done.
</p>

<?php echo CHtml::link('Advanced Search','#',array('class'=>'search-button')); ?>
<div class="search-form" style="display:none">
<?php $this->renderPartial('_search',array(
	'model'=>$model,
)); ?>
</div><!-- search-form -->

<?php $this->widget('zii.widgets.grid.CGridView', array(
	'id'=>'objekat-has-kategorija-grid',
	'dataProvider'=>$model->search(),
	'filter'=>$model,
	'columns'=>array(
		'Objekat_idObjekat',
		'Kategorija_idKategorija',
		array(
			'class'=>'CButtonColumn',
		),
	),
)); ?>
